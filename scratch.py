import os
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Increase padding and make alternating backgrounds much stronger
# Replace bg-surface-container-low with bg-surface-container-high and increase padding
content = content.replace('class="py-24 bg-surface-container-low', 'class="py-32 bg-surface-container-high border-y border-outline-variant/30"')
content = content.replace('class="py-24 bg-surface-container-low border-b', 'class="py-32 bg-surface-container-high border-y')
content = content.replace('class="py-24 bg-surface border-y', 'class="py-32 bg-surface border-y')
content = content.replace('class="py-24 bg-surface-container-low border-t', 'class="py-32 bg-surface-container-high border-y')

# 2. Add Eyebrow Badges to sections
# Features Bento
bento_h2 = '<h2 class="font-display text-headline-lg mb-4 text-on-surface tracking-tight">Designed for the modern <br/> Church</h2>'
bento_eyebrow = """<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm uppercase tracking-widest mb-6 border border-primary/20">
        <span class="material-symbols-outlined text-sm">view_cozy</span> Core Features
      </div>\\n      """
content = content.replace(bento_h2, bento_eyebrow + bento_h2)

# Ministry Leaders (Stats)
stats_h2 = '<h2 class="font-display text-[40px] leading-tight text-on-surface mb-12">\\n        Built by Ministry Leaders, <br/> for Ministry Leaders.\\n      </h2>'
stats_eyebrow = """<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm uppercase tracking-widest mb-6 border border-primary/20">
        <span class="material-symbols-outlined text-sm">monitoring</span> The Impact
      </div>\\n      """
content = content.replace(stats_h2, stats_eyebrow + stats_h2)

# Testimonials
test_h2 = '<h2 class="font-display text-headline-lg text-on-surface tracking-tight mb-4">Trusted by Shepherds</h2>'
test_eyebrow = """<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm uppercase tracking-widest mb-6 border border-primary/20">
        <span class="material-symbols-outlined text-sm">forum</span> Testimonials
      </div>\\n      """
content = content.replace(test_h2, test_eyebrow + test_h2)

# Pricing
price_h2 = '<h2 class="font-display text-headline-lg text-on-surface tracking-tight mb-4">Simple, Transparent Pricing</h2>'
price_eyebrow = """<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm uppercase tracking-widest mb-6 border border-primary/20">
        <span class="material-symbols-outlined text-sm">sell</span> Plans & Pricing
      </div>\\n      """
content = content.replace(price_h2, price_eyebrow + price_h2)

# FAQ
faq_h2 = '<h2 class="font-display text-headline-lg text-on-surface tracking-tight mb-12 text-center">Frequently Asked Questions</h2>'
faq_eyebrow = """<div class="flex justify-center mb-6">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-label-sm uppercase tracking-widest border border-primary/20">
        <span class="material-symbols-outlined text-sm">help</span> FAQ
      </div>
    </div>\\n    """
content = content.replace(faq_h2, faq_eyebrow + faq_h2)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated index.html successfully.")
