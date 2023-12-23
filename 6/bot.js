import puppeteer from 'puppeteer'

export async function runBot(input) {
    console.log("Running puppeteer...");
    if (!input.startsWith("http://localhost:18080/")) {
        console.log("Input must start with http://localhost:18080/");
        return;
    }
    const browser = await puppeteer.launch({
        headless: 'new',
        timeout: 10000,
    });
    const page = await browser.newPage();
    await page.exposeFunction('solve', async () => {
        if (page.url().startsWith("http://localhost:18080/")) {
            console.log("Solved!");
            process.exit(0);
        } else {
            console.log("solve() function called from a different page.");
            process.exit(1);
        }
    });
    await page.goto(input, {
        timeout: 10000,
    });
    setTimeout(() => {
        console.log("Timeout exceeded");
        process.exit(1);
    }, 10000);
}