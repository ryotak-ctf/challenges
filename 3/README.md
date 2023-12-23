# Challenge 3: Unmatched genius sanitizer 1

| Challenge ID | 3 |
| :---- | :---- | 
| **Title** | Unmatched genius sanitizer 1 |
| **Difficulty** | Normal |
| **Answer format** | Payload that executes `solve()` function when specified in the `?html=` parameter. (e.g., `<script>solve()</script>`) |
| **Solvers** | [Solvers list](https://github.com/ryotak-ctf/scoreboard/tree/main/solvers/3)  |

## Description
We recently released a feature that allows you to use arbitrary HTMLs in our service. However, someone reported that there is a XSS vulnerability in the feature, but they didn't provide any details.  
Could you please help us to find the vulnerability?  

### How to debug
Clone this repository, and run `docker compose up` in this directory.  
Then, you can access the challenge at `http://localhost:18080/`.


## Hints

<details>
<summary>Hint 1</summary>

You can bypass the sanitizer somehow.  
<details>
<summary>Hint 2</summary>

Spec is your friend: https://html.spec.whatwg.org
<details>
<summary>Hint 3</summary>

Oh no, scripting is disabled in JSDOM?!
</details>
</details>
</details>