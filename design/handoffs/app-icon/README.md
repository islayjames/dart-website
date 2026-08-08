# Dart app-icon handoff

Approved by Lindsay Simmons on 2026-08-07 for consistency with the website visual system.

## Source rule

These files are deterministic derivatives of `public/images/dart-logo-mark.png`, the exact approved website Dart. Do not regenerate or reinterpret the fox for app-icon work.

## Files

- `icon.png` — 1024×1024 opaque iOS/Expo app-icon master.
- `adaptive-icon.png` — 1024×1024 transparent Android adaptive foreground with the approved mark inset into the safe zone.
- `comparison.png` — current mobile icon versus proposed iOS/website and Android treatments.

## Mobile implementation

Copy into the product repository:

- `icon.png` → `apps/mobile/assets/icon.png`
- `adaptive-icon.png` → `apps/mobile/assets/adaptive-icon.png`

Update `apps/mobile/app.json`:

```json
"adaptiveIcon": {
  "foregroundImage": "./assets/adaptive-icon.png",
  "backgroundColor": "#F4E8D0"
}
```

The notification icon must be validated separately: Android notification icons generally require a monochrome transparent glyph, so do not assume the full-color app icon is valid for `expo-notifications.icon`.

## Acceptance checks

1. Run a clean Expo prebuild so generated native app-icon sets cannot remain stale.
2. Verify the iOS icon is opaque, 1024×1024, and non-trivial in the generated `AppIcon*` set.
3. Verify Android circle, squircle, rounded-square, and teardrop masks do not clip either ear or the face.
4. Confirm the icon is legible at 60px and 32px.
5. Confirm no older straight-on fox portrait appears in generated native assets.
