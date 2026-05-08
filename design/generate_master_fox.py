#!/usr/bin/env python3
"""
Generate master brand images of "Dart the Fox" for HeyDart app.
Style: Storybook Nightfall — warm, illustrated, vintage Disney-adjacent,
watercolor + gouache textures, warm buttercream and twilight navy palette.
"""

import os
import base64
import time
from openai import OpenAI

# API key from existing project scripts
API_KEY = "REDACTED"

client = OpenAI(api_key=API_KEY)

OUTPUT_DIR = "/Users/james/dev/dart-website/public/images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Consistent character description prefix used in all prompts
CHARACTER_DESC = (
    "Dart is a rust-orange fox: warm rust-orange coat, cream/ivory chest and muzzle, "
    "bright expressive amber/golden eyes (intelligent and friendly), fluffy tail with cream-colored tip, "
    "wears a small dark navy satchel/messenger bag. Upright posture, slightly anthropomorphic — "
    "walks on hind legs, uses forepaws. "
    "Style: hand-illustrated storybook, detailed but not photorealistic — classic Disney concept art meets "
    "Beatrix Potter meets vintage travel poster illustration. "
    "Watercolor and gouache textures, warm buttercream and twilight navy palette. "
    "Loose pencil under-drawing visible, chalky paper texture. Hand-drawn feel, NOT digital flat shapes. "
)

IMAGES = [
    {
        "filename": "dart-logo-mark.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Portrait of Dart the fox facing directly forward, centered composition, waist-up framing. "
            "Clean iconic logo mark — bold, recognizable at small sizes. "
            "Background: deep twilight navy circular or rounded badge shape, slightly textured like aged paper or linen. "
            "The fox is centered within the badge, warm amber eyes looking at viewer with a confident friendly expression. "
            "Navy satchel strap visible across chest. "
            "Clean edges suitable for use as an app icon. Square 1024x1024 crop. "
            "Warm buttercream highlights, navy ink outlines. No other characters or text."
        ),
    },
    {
        "filename": "dart-full-character.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Full body portrait of Dart the fox standing upright, facing slightly left in a 3/4 view. "
            "The dark navy satchel/messenger bag is clearly visible at Dart's side. "
            "Confident, friendly stance — weight on one foot, one paw resting near the satchel strap. "
            "Clean warm cream/buttercream background, plain and minimal so the character reads clearly. "
            "This is the master character reference sheet — every detail of the character visible. "
            "Full figure from ears to feet, centered with breathing room on all sides. "
            "Warm watercolor tones, gouache highlights on fur. No other characters or props except the satchel."
        ),
    },
    {
        "filename": "dart-running.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Dart the fox running/darting forward with enthusiasm — legs mid-stride in a dynamic run pose. "
            "The dark navy satchel is bouncing at Dart's side, strap taut. "
            "Face forward-facing with a determined, joyful expression — amber eyes bright and focused ahead. "
            "Slight motion blur or speed lines in the watercolor wash behind the figure. "
            "Minimal transparent-style background — soft cream or very faint watercolor wash, no heavy background elements. "
            "The running pose should feel energetic and light, like sprinting through a park. "
            "Diagonal dynamic composition. No other characters."
        ),
    },
    {
        "filename": "dart-waving.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Dart the fox in a warm, friendly waving pose — one paw raised high in greeting, slight lean forward. "
            "Warm smile, bright amber eyes looking directly at the viewer. "
            "The dark navy satchel visible at the side. "
            "Welcoming, inviting body language — like greeting a friend arriving at the park gates. "
            "Soft warm cream/buttercream background with very faint subtle watercolor wash. "
            "Full or three-quarter body visible. Cheerful storybook illustration feel. No other characters."
        ),
    },
    {
        "filename": "dart-thinking.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Dart the fox in a thoughtful, contemplative pose — one paw raised to chin in classic thinking gesture, "
            "eyes looking slightly upward and to the side with a focused, curious expression. "
            "Near Dart, a small unrolled paper schedule or hand-drawn map is visible — perhaps held in the other paw "
            "or laid on a surface. The dark navy satchel is visible. "
            "The mood is gentle curiosity and careful planning. "
            "Warm cream background with soft watercolor atmospheric wash. "
            "Storybook illustration style, cozy and warm. No other characters."
        ),
    },
    {
        "filename": "dart-celebrating.png",
        "size": "1024x1024",
        "prompt": (
            CHARACTER_DESC +
            "Dart the fox celebrating joyfully — both arms/paws raised triumphantly overhead, "
            "feet possibly slightly off the ground in a happy jump. "
            "Face: huge joyful smile, eyes bright and squinted with happiness. "
            "Small colorful confetti pieces and tiny sparkles scatter around the figure — "
            "warm gold, cream, and soft coral confetti in the watercolor palette. "
            "The dark navy satchel is visible. "
            "Background: soft warm cream with celebratory light glow, minimal but festive. "
            "The energy should feel like 'you did it!' or 'booking confirmed!' — pure delight. "
            "Storybook illustration style. No other characters."
        ),
    },
]


def generate_image(image_spec: dict, attempt: int = 1) -> bool:
    """Generate a single image and save to disk. Returns True on success."""
    filename = image_spec["filename"]
    filepath = os.path.join(OUTPUT_DIR, filename)
    prompt = image_spec["prompt"]
    size = image_spec.get("size", "1024x1024")

    print(f"\n[{'Attempt ' + str(attempt)}] Generating: {filename} ({size})")
    print(f"  Prompt preview: {prompt[:120]}...")

    try:
        response = client.images.generate(
            model="gpt-image-1",
            prompt=prompt,
            size=size,
            output_format="png",
            n=1,
        )

        # gpt-image-1 returns base64 data
        image_data = response.data[0].b64_json
        if image_data:
            img_bytes = base64.b64decode(image_data)
            with open(filepath, "wb") as f:
                f.write(img_bytes)
            size_kb = len(img_bytes) / 1024
            print(f"  Saved: {filepath} ({size_kb:.1f} KB)")
            if size_kb < 50:
                print(f"  WARNING: File size is very small ({size_kb:.1f} KB) — may be corrupt.")
                return False
            return True
        else:
            print(f"  ERROR: No image data in response for {filename}")
            return False

    except Exception as e:
        print(f"  ERROR generating {filename}: {e}")
        return False


def main():
    print("=" * 60)
    print("HeyDart — Master Fox Image Generation")
    print("Style: Storybook Nightfall")
    print("=" * 60)

    results = {}

    for image_spec in IMAGES:
        filename = image_spec["filename"]

        # First attempt
        success = generate_image(image_spec, attempt=1)

        if not success:
            print(f"  Retrying {filename} with slightly modified prompt...")
            time.sleep(3)
            # Retry with a slightly modified prompt (add reinforcement)
            retry_spec = dict(image_spec)
            retry_spec["prompt"] = (
                "Storybook illustration, watercolor and gouache style. " + image_spec["prompt"]
            )
            success = generate_image(retry_spec, attempt=2)

        results[filename] = success

        # Small delay between generations to be respectful of rate limits
        if image_spec != IMAGES[-1]:
            time.sleep(2)

    # Summary
    print("\n" + "=" * 60)
    print("GENERATION SUMMARY")
    print("=" * 60)
    succeeded = []
    failed = []
    for filename, success in results.items():
        filepath = os.path.join(OUTPUT_DIR, filename)
        if success and os.path.exists(filepath):
            size_kb = os.path.getsize(filepath) / 1024
            print(f"  OK  {filename} ({size_kb:.1f} KB)")
            succeeded.append(filename)
        else:
            print(f"  FAIL {filename}")
            failed.append(filename)

    print(f"\nSucceeded: {len(succeeded)}/{len(IMAGES)}")
    if failed:
        print(f"Failed: {', '.join(failed)}")
    print("=" * 60)


if __name__ == "__main__":
    main()
