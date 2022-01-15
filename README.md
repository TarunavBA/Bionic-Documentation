#### Bionic-Documentation

<a href="https://mathlete-inc.github.io/Bionic-Documentation/">-Mathlete</a>
<br>

##

### Basic-syntax

<details>
<summary>main.py</summary>
<br>
Basic-syntax | main.py
<br><br>

```python

from view import *


def RunApp():
    Head(),
    Body(
        Text('hello'),
    ),
```

</details>

---

### Head

<details>
<br>
Basic-Head | main.py
<br><br>

```python
from view import *


def RunApp():
    Head(title='titleOfThePage',
         themeColor='#1e90ff',
         description='descriptionOfThePage',
         icon='src/icon.ico'),
    Body(
        Text('hello'),
    ),

```

<summary>main.py</summary>
</details>

---

### TopNavBar

<details>
<br>
Basic-TopNavBar | main.py
<br><br>

```python
from view import *


def RunApp():
    Head(),
    Body(
        BottomNav(labelText='Navbar',
                  height='20px',
                  backgroundColor='blue',
                  labelFontSize='1.2.rem'),
    )

```

<summary>main.py</summary>
</details>

---
