import requests
import base64
import os
import time

api_key = "REDACTED"
headers = {"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
output_dir = "/Users/james/dev/dart-website/public/images"

os.makedirs(output_dir, exist_ok=True)

# Consistent fox character prefix
FOX_PREFIX = "A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). "

images = [
    # --- FOX IMAGES (regenerate with consistent character prefix) ---
    {
        "filename": "home-hero.png",
        "size": "1024x1536",
        "prompt": FOX_PREFIX + "A wide vertical illustration of a generic storybook castle silhouette under a deep cobalt-night sky transitioning to warm amber horizon. Marquee-amber light glows from castle windows. The fox named Dart with cream belly stands in a soft foreground meadow looking up at the castle. Loose pencil under-drawing visible, watercolor wash on top, chalky paper texture. Hand-drawn feel — NOT digital flat shapes. Faint scatter of stars in white gouache. NO Disney IP — generic three-tower fairytale castle, NOT Cinderella's castle. Style: early Disney pre-production storyboard, Eyvind Earle dusk panels, Mary Blair concept boards."
    },
    {
        "filename": "home-spot-1.png",
        "size": "1024x1024",
        "prompt": FOX_PREFIX + "The fox Dart with cream belly peeking around the corner of a stylized queue rope-line stanchion. Watercolor wash and pencil sketch. Cream paper background, rust-orange fox, navy ink lines. Style: vintage storyboard sketch, Bill Peet character work, watercolor and pencil."
    },
    {
        "filename": "hiw-4.png",
        "size": "1024x1024",
        "prompt": FOX_PREFIX + "The fox Dart with cream belly looking at a winding paper map with two divergent paths sketched in. The paths fork around obstacles. Watercolor wash and pencil. Cream paper background, navy ink lines, gold path highlights, magenta detour line. Style: vintage Disney storyboard panel, watercolor concept art."
    },
    {
        "filename": "hiw-5.png",
        "size": "1024x1024",
        "prompt": FOX_PREFIX + "The fox Dart with cream belly proudly carrying a tiny restaurant menu like a victory flag, walking past a row of colorful umbrella tables in a whimsical outdoor dining scene. Watercolor wash and pencil. Cream paper background, navy ink lines, magenta and teal accents on the umbrellas. Style: vintage storyboard illustration, Mary Blair character work."
    },
    {
        "filename": "pricing-beta.png",
        "size": "1024x1024",
        "prompt": FOX_PREFIX + "The fox Dart with cream belly holding a clipboard with a large checkmark, standing in front of a string of colorful bunting flags strung between two posts in a stylized banner illustration. Festive and warm. Watercolor wash and pencil. Cream paper background, navy ink lines, gold and magenta accents on the flags, teal accent color. Style: vintage circus banner art, watercolor and ink."
    },
    {
        "filename": "about-portrait.png",
        "size": "1024x1536",
        "prompt": FOX_PREFIX + "Stylized double-portrait illustration of a husband and wife standing close together, the man in casual clothes looking friendly and confident, the woman holding a small clipboard looking warm and organized. The fox Dart sits or stands near them in the scene. Generic warm illustrated faces — NOT photo-real. Watercolor wash with visible pencil under-drawing. Cream paper background, navy ink lines, hints of gold and magenta. Painterly and warm. NO Disney imagery in the background — just a soft cobalt sky gradient behind them. Style: watercolor portrait illustration, Mary Blair character work."
    },
    # --- RETRY hiw-2.png with revised prompt (no fox, but was moderation-blocked) ---
    {
        "filename": "hiw-2.png",
        "size": "1024x1024",
        "prompt": "Stylized vintage illustration of two rounded rectangular cards side-by-side, one labeled 'MDE' and the other labeled 'DART', connected by a flowing ribbon of warm golden light between them. Watercolor wash with visible pencil under-drawing. Cream paper background, cobalt blue palette, warm gold ribbon arc flowing between the two cards. No real logos or trademarks. Style: vintage diagram illustration art, 1950s travel brochure, watercolor and pencil."
    },
]

results = []

for img in images:
    print(f"Generating {img['filename']} ({img['size']})...")
    try:
        resp = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers=headers,
            json={
                "model": "gpt-image-1",
                "prompt": img["prompt"],
                "n": 1,
                "size": img["size"],
                "output_format": "png"
            },
            timeout=120
        )
        data = resp.json()
        if "data" in data and len(data["data"]) > 0:
            b64 = data["data"][0]["b64_json"]
            filepath = os.path.join(output_dir, img["filename"])
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(b64))
            print(f"  SUCCESS: Saved {img['filename']}")
            results.append({"filename": img["filename"], "status": "SUCCESS"})
        else:
            print(f"  ERROR for {img['filename']}: {data}")
            results.append({"filename": img["filename"], "status": f"ERROR: {data}"})
    except Exception as e:
        print(f"  EXCEPTION for {img['filename']}: {e}")
        results.append({"filename": img["filename"], "status": f"EXCEPTION: {e}"})

    time.sleep(2)

print("\n=== SUMMARY ===")
for r in results:
    print(f"{r['filename']}: {r['status']}")
