---
title: Reference
---

# Hello from the reference section

[[toc]]

## Something here
Some para text.

Another line. And another bit. I like how quickly this updates. :tada: :100:

## Another section
Some para text.

Another line. And another bit. I like how quickly this updates. :tada: :100:

```python
from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]
```

::: tip
This is a tip
:::