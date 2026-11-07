"""Make the Newsreader SemiBold used for headings: weight 600, with the optical-size axis
kept from 24 to 72 pt, so large headings get the display cut (as in the approved mock-up).

Source: the Latin subset of @fontsource-variable/newsreader. Needs fontTools with brotli:
    python3 -m pip install fonttools brotli
    python3 scripts/instance-newsreader.py
"""

from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

root = Path(__file__).resolve().parent.parent
source = root / "node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2"
target = root / "src/assets/fonts/newsreader-latin-600-opsz.woff2"

font = instancer.instantiateVariableFont(TTFont(source), {"wght": 600, "opsz": (24, 72)})
font.flavor = "woff2"
font.save(target)
print(f"Wrote {target.relative_to(root)} ({target.stat().st_size // 1024} KB)")
