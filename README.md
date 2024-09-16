# easy_modals

Simple modals using CSS and Javascript with no other dependencies.

# Quickstart

1. Import `modal.css` into your HTML file
2. Import `modal.js` at the **bottom** of your HTML file.
3. Add the following code to your HTML, wherever you want a modal trigger:

```
    <!-- Trigger for the Modal -->
    <button class="modal-triggers" target="myModal">Click me</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            I am a modal!
        </div>
    </div>
```

That's it!

# Example HTML

To use this example:

1. Copy this into a file and title it `mymodal.html`.
2. Add files `modal.css` and `modal.js` into the same directory as `mymodal.html`

```
<html>

<head>
    <link type="text/css" rel="stylesheet" href="modal.css" />
    <title>Page with modals</title>
</head>

<body>

    <!-- Trigger for the Modal -->
    <button class="modal-triggers" target="myModal">Click me</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            I am a modal!
        </div>
    </div>

    <script src="modal.js"></script>

</body>

</html>
```

# Opening a modal via javascript

You can also open a modal manually with javascript, via the `open_modal` function. This could be useful if you only want to open a modal after doing some task, such as making a server call and waiting for its response.

In that case, you need only call the funtion `open_modal(document.getElementById("my-manual-modal"));` where `my-manual-modal` is a `div` of class `modal` such as the one in example above.

## Example of opening a modal using javascript

In this dummy example, I am just opening the modal when the page loads. Obviously, you'd want to do something more useful. For example, you might make an API call to the server; when the server returns data, you could modify the text in the `<p>` element inside the `modal-content` div, and then open the modal.

```
<html>

<head>
    <link type="text/css" rel="stylesheet" href="modal.css" />
    <title>Page with modals</title>
</head>

<body>

    <!-- The Modal -->
    <div id="manual-modal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <p>Modal opened by javascript.</p>
        </div>
    </div>

    <script src="modal.js"></script>

    <script>
        open_modal(document.getElementById("manual-modal"));
    </script>
</body>

</html>
```