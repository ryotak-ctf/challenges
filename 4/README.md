# Challenge 4: Unmatched genius sanitizer 2

| Challenge ID | 4 |
| :---- | :---- | 
| **Title** | Unmatched genius sanitizer 2 |
| **Difficulty** | Normal |
| **Answer format** | Payload that executes `solve()` function when specified in the `?html=` parameter. (e.g., `<script>solve()</script>`) |
| **Solvers** | [Solvers list](https://github.com/ryotak-ctf/scoreboard/tree/main/solvers/4)  |

## Description
__If you haven't solved [Unmatched genius sanitizer 1](https://github.com/ryotak-ctf/challenges/tree/main/3) yet, I'd recommend you to solve it first.__

Thank you so much for helping us to find the XSS vulnerability in our service!  
We've updated our sanitizer. The list of changes are as follows:
- We've updated the filter and mitigated the XSS vulnerability. You should not be able to achieve XSS anymore.  
- You can now use the `color` attribute in `font` tag.
- Instead of using JSDOM, we are now using a library called htmlparser2 to parse HTMLs. This allowed us to achieve a significant performance improvement.  

Do you think that we've mitigated the XSS vulnerability correctly?  

### How to debug
Clone this repository, and run `docker compose up` in this directory.  
Then, you can access the challenge at `http://localhost:18080/`.


## Hints

<details>
<summary>Hint 1</summary>

You can bypass the sanitizer somehow. (again)  
<details>
<summary>Hint 2</summary>

htmlparser2 is not spec-compliant :O
<details>
<summary>Hint 3</summary>

hmmmmm https://github.com/fb55/htmlparser2/blob/0c690402e898a86ce237d1de6c39a26b2ef183d6/src/Tokenizer.ts#L130-L137
</details>
</details>
</details>