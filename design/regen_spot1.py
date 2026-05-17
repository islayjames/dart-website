#!/usr/bin/env python3
"""Regenerate home-spot-1.png with full character consistency description."""

import os
import base64
from openai import OpenAI

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
OUTPUT_DIR = "/Users/james/dev/dart-website/public/images"

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

SCENE = (
    "Dart the fox peeking around the corner of a stylized velvet-rope queue stanchion — "
    "one paw grasping the chrome post, half the face and one bright amber eye visible, "
    "fluffy tail curling around behind. The fox looks curious and slightly mischievous. "
    "The navy satchel strap is visible on the shoulder. "
    "Warm cream paper background, rust-orange fox fur, navy ink outlines, gold accent on the velvet rope. "
    "Square composition (1024x1024). Style: vintage storybook sketch, Bill Peet character work, "
    "watercolor and gouache with visible pencil under-drawing."
)

prompt = CHARACTER_DESC + SCENE

print("Generating home-spot-1.png...")
print(f"Prompt length: {len(prompt)} chars")

response = client.images.generate(
    model="gpt-image-1",
    prompt=prompt,
    size="1024x1024",
    output_format="png",
    n=1,
)

image_data = response.data[0].b64_json
img_bytes = base64.b64decode(image_data)
filepath = os.path.join(OUTPUT_DIR, "home-spot-1.png")
with open(filepath, "wb") as f:
    f.write(img_bytes)

size_kb = len(img_bytes) / 1024
print(f"Saved: {filepath} ({size_kb:.1f} KB)")
