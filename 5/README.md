# Challenge 5: Unmatched genius sanitizer 3

| Challenge ID | 5 |
| :---- | :---- | 
| **Title** | Unmatched genius sanitizer 3 |
| **Difficulty** | Normal |
| **Answer format** | Payload that executes `solve()` function when specified in the `?html=` parameter. (e.g., `<script>solve()</script>`) |
| **Solvers** | [Solvers list](https://github.com/ryotak-ctf/scoreboard/tree/main/solvers/5)  |

## Description
__If you haven't solved [Unmatched genius sanitizer 1](https://github.com/ryotak-ctf/challenges/tree/main/3) and [Unmatched genius sanitizer 2](https://github.com/ryotak-ctf/challenges/tree/main/4) yet, I'd recommend you to solve it first.__


Wow, you bypassed the sanitizer again! Indeed, we need a better sanitizer.  

We've updated our sanitizer, and it's now using the client-side DOM parser. Also, we've removed the feature that allows you to use the `color` attribute in `font` tag, and now allowing you to use the `style` element instead.  

We are now confident that we've mitigated the XSS vulnerability correctly. Thanks again for helping us to mitigate the vulnerability!  

### How to debug
Clone this repository, and run `docker compose up` in this directory.  
Then, you can access the challenge at `http://localhost:18080/`.


## Hints

<details>
<summary>Hint 1</summary>

You can bypass the sanitizer somehow. (once more!)  
<details>
<summary>Hint 2</summary>

DOMParser is spec-compliant, but...
<details>
<summary>Hint 3</summary>

Conflict, Clobbering, and Overriding!
</details>
</details>
</details>