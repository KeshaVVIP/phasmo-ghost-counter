# 👻 Phasmophobia Ghost Counter

A small fan-made web app by KeshaVVIP for keeping track of how many times you've encountered each ghost in **Phasmophobia**.

Because apparently after hundreds of hours of Phasmophobia, I decided the thing I was missing was **statistics about how badly the ghosts are ruining my life** and how often Demons kill me lmao.

## 🎮 What is it?

The **Phasmophobia Ghost Counter** lets you keep a running count of encounters with each ghost type. auto-saves even if you reload the page!

You can:
* ➕ Increase a ghost's encounter count
* ➖ Decrease a count if you accidentally added one
* 📊 See your total number of ghost encounters
* 🔄 Reset all counters back to zero
* 💾 Automatically save your counts in your browser

The counters are stored using the browser's `localStorage`, meaning your numbers will still be there when you come back to the site later (unless you clear your browser data or reset everything L).

## 🛠️ Built With

* **HTML** - Page structure
* **CSS** - Styling and layout
* **JavaScript** - Ghost list, counters, total encounters and saving data
* **localStorage** - Keeping your incredibly important ghost statistics alive
* **Google Fonts** - For the spooky-ish title font

## 📁 Project Structure

```text
phasmophobia-ghost-counter/
index.html       # Main webpage
style.css        # Styling and layout
script.js        # Ghost list and counter functionality
background.jpg   # Website background
README.md        # You are here well done
```

## 🚀 Running the Project

No complicated setup required.

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Start counting ghosts.

That's it. No database, server or mysterious cloud infrastructure required you're welcome.

## 🧠 How It Works

The ghost names are stored in a JavaScript array. The website then creates a counter row for each ghost automatically rather than having to manually write every ghost into the HTML.

When a `+` or `-` button is clicked, JavaScript updates the corresponding count and refreshes the total number of encounters.

The current counts are saved to `localStorage`, so they persist between visits.

The `Reset All` button clears every counter back to `0` after asking for confirmation.

## ✨ Why I Made It

I wanted a simple way to keep track of how often I encounter different ghost types while playing Phasmophobia, while also using the project as a way to practise building a small interactive website with HTML, CSS and JavaScript.

It's a pretty small project, but it gave me the opportunity to work with:

* DOM manipulation
* Event handling
* JavaScript arrays and objects
* Dynamic HTML generation
* Browser storage
* CSS Grid and Flexbox
* Basic responsive webpage structure

## 📝 Notes

This is an **unofficial, fan-made project**.

Phasmophobia and all associated assets, logos and characters are trademarks and copyrights of **Kinetic Games Limited**. This project is not affiliated with or endorsed by Kinetic Games.

## 👻 Have fun

Hopefully this helps you answer the really important questions in life:

> "How many times have I actually seen a Demon?"

> "Why have I encountered 47 Spirits?"

> "Why is my favourite ghost apparently the one that keeps killing me?"

Happy ghost hunting! 🔦
