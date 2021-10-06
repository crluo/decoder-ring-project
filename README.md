# decoder-ring-project

### capstone project that algorithmically mimics well known historic ciphers

technologies: JavaScript, Node.js

#### Caesar Shift

encodes/decodes a string via taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order

ex. `caesar("message", 8)` outputs "umaaiom"

#### Polybius Square

![polybius-square](https://user-images.githubusercontent.com/83685131/136272276-94350c69-cdfe-47ba-a568-ffd9bad816f7.png)

encodes/decodes a string by arranging a typical alphabet into a grid and each letter is represented through a coordinate

ex. `polybius("message")` outputs "23513434112251"

#### Substitution Cipher

encodes/decodes a string using a standard alphabet and a substitution alphabet, letters from the standard alphabet will be transposed to the standard alphabet

ex. `substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")` outputs "y&ii$r&"
