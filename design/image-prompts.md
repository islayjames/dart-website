# HeyDart — Image Generation Prompts

Brand: **HeyDart** — Disney World planning assistant  
Mascot: Dart, a small rust-orange fox with cream/off-white belly  
Brand voice: "Storybook Nightfall" — warm, hand-drawn, vintage park poster, gentle  
Art style: Painterly watercolor + pencil storyboard illustrations (NOT digital flat shapes or photos)  
Style references: Early Disney pre-production storyboard art / Eyvind Earle dusk panels / Mary Blair concept boards  
IP restriction: NO Disney IP (no Cinderella castle, no Mickey, no real attraction names in art)

Model used: **gpt-image-1** (OpenAI Images API)

---

## Fox Character Consistency Prefix

All images featuring Dart the fox use this prefix at the start of the prompt:

> "A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). "

---

## Images

### 1. home-hero.png
**Orientation:** Portrait (~1024×1536)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). A wide vertical illustration of a generic storybook castle silhouette under a deep cobalt-night sky transitioning to warm amber horizon. Marquee-amber light glows from castle windows. The fox named Dart with cream belly stands in a soft foreground meadow looking up at the castle. Loose pencil under-drawing visible, watercolor wash on top, chalky paper texture. Hand-drawn feel — NOT digital flat shapes. Faint scatter of stars in white gouache. NO Disney IP — generic three-tower fairytale castle, NOT Cinderella's castle. Style: early Disney pre-production storyboard, Eyvind Earle dusk panels, Mary Blair concept boards.

---

### 2. home-spot-1.png
**Orientation:** Square (1024×1024)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). The fox Dart with cream belly peeking around the corner of a stylized queue rope-line stanchion. Watercolor wash and pencil sketch. Cream paper background, rust-orange fox, navy ink lines. Style: vintage storyboard sketch, Bill Peet character work, watercolor and pencil.

---

### 3. home-spot-2.png
**Orientation:** Square (1024×1024)  
**Has fox:** No  
**Prompt:**
> A vintage paper itinerary scroll with handwritten times and small ride-stamp icons: a ferris wheel, a mountain silhouette, a monorail. Watercolor wash, ink lettering. Cream paper background, gold stamps, navy ink. Style: 1950s park brochure, vintage travel ephemera, watercolor and ink.

---

### 4. home-spot-3.png
**Orientation:** Square (1024×1024)  
**Has fox:** No  
**Prompt:**
> A ferris wheel silhouette beneath bursting fireworks. Loose ink line, magenta and gold watercolor wash on cobalt paper. Stars scattered with white gouache. Style: early Disney 1950s park brochure, vintage poster art.

---

### 5. hiw-2.png
**Orientation:** Landscape (1024×1024, original brief called for ~1024×576 but API minimum used)  
**Has fox:** No  
**Note:** Original prompt was moderation-blocked; revised prompt removes ambiguous phrasing  
**Prompt:**
> Stylized vintage illustration of two rounded rectangular cards side-by-side, one labeled 'MDE' and the other labeled 'DART', connected by a flowing ribbon of warm golden light between them. Watercolor wash with visible pencil under-drawing. Cream paper background, cobalt blue palette, warm gold ribbon arc flowing between the two cards. No real logos or trademarks. Style: vintage diagram illustration art, 1950s travel brochure, watercolor and pencil.

---

### 6. hiw-4.png
**Orientation:** Landscape (1024×1024, original brief called for ~1024×576 but API minimum used)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). The fox Dart with cream belly looking at a winding paper map with two divergent paths sketched in. The paths fork around obstacles. Watercolor wash and pencil. Cream paper background, navy ink lines, gold path highlights, magenta detour line. Style: vintage Disney storyboard panel, watercolor concept art.

---

### 7. hiw-5.png
**Orientation:** Landscape (1024×1024, original brief called for ~1024×576 but API minimum used)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). The fox Dart with cream belly proudly carrying a tiny restaurant menu like a victory flag, walking past a row of colorful umbrella tables in a whimsical outdoor dining scene. Watercolor wash and pencil. Cream paper background, navy ink lines, magenta and teal accents on the umbrellas. Style: vintage storyboard illustration, Mary Blair character work.

---

### 8. pricing-beta.png
**Orientation:** Landscape (1024×1024, original brief called for ~1024×768 but square used)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). The fox Dart with cream belly holding a clipboard with a large checkmark, standing in front of a string of colorful bunting flags strung between two posts in a stylized banner illustration. Festive and warm. Watercolor wash and pencil. Cream paper background, navy ink lines, gold and magenta accents on the flags, teal accent color. Style: vintage circus banner art, watercolor and ink.

---

### 9. about-portrait.png
**Orientation:** Portrait (~1024×1536)  
**Has fox:** Yes  
**Prompt:**
> A small rust-orange fox named Dart (rust-orange fur, cream/off-white belly and inner ears, dark navy ink outlines, large dark expressive eyes, petite round storybook body, fluffy tail with cream tip — friendly and charming, NOT realistic, consistent character design across all images). Stylized double-portrait illustration of a husband and wife standing close together, the man in casual clothes looking friendly and confident, the woman holding a small clipboard looking warm and organized. The fox Dart sits or stands near them in the scene. Generic warm illustrated faces — NOT photo-real. Watercolor wash with visible pencil under-drawing. Cream paper background, navy ink lines, hints of gold and magenta. Painterly and warm. NO Disney imagery in the background — just a soft cobalt sky gradient behind them. Style: watercolor portrait illustration, Mary Blair character work.

---

## Generation Notes

- All images generated with **gpt-image-1** via OpenAI Images API
- Portrait images use size `1024x1536`; square/landscape images use `1024x1024`
- The API does not support `1024x576` or `1024x768` — landscape images were generated at `1024x1024` and can be cropped if needed
- `hiw-2.png` was initially blocked by the safety system; the revised prompt (above) was accepted
- All fox images were regenerated with the consistent character prefix to ensure visual coherence of the Dart mascot across illustrations
- Generated: 2026-05-07
