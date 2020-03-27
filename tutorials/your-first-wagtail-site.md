# Your first Wagtail site

::: tip Note
This tutorial covers setting up a brand new Wagtail project. If you’d like to add Wagtail to an existing Django project instead, see [Integrating Wagtail into a Django project](/somelink).
:::

## Install and run Wagtail

### Install dependencies

Wagtail supports Python 3.5, 3.6, 3.7 and 3.8. To check that you have an appropriate version:

```bash
python3 --version
```

If this does not return a version number or returns a version lower than 3.5, you will need to install Python 3.

::: warning Important
Before installing Wagtail, it is necessary to install the **libjpeg** and **zlib** libraries, which provide support for working with JPEG, PNG and GIF images (via the Python Pillow library). The way to do this varies by platform—see Pillow’s [platform-specific installation instructions](link-here).
:::

### Create and activate a virtual environment

We recommend using a virtual environment, which provides an isolated Python environment. This tutorial uses [venv](https://docs.python.org/3/tutorial/venv.html), which is packaged with Python 3.

:::: tabs


::: tab Unix or MacOS

```bash
python3 -m venv mysite/env
source mysite/env/bin/activate
```

:::

::: tab Windows

```bash
python3 -m venv mysite\env
mysite\env\Scripts\activate.bat
```

:::

::: tab other shells

See the [venv documentation](https://docs.python.org/3/library/venv.html)

:::

::::

::: tip Note
If you’re using version control (e.g. git), `mysite` will be the directory for your project. The env directory inside it should be excluded from any version control.
:::

### Install Wagtail

Use pip, which is packaged with Python, to install Wagtail and its dependencies:

```bash
python3 -m pip install wagtail
```

### Generate your site

Wagtail provides a `start` command similar to `django-admin startproject`. Running `wagtail start mysite` in your project will generate a new `mysite` folder with a few Wagtail-specific extras, including the required project settings, a “home” app with a blank `HomePage` model and basic templates, and a sample “search” app.

Because the folder `mysite` was already created by `venv`, run `wagtail start` with an additional argument to specify the destination directory: