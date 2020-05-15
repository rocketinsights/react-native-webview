export const HTML2 = `
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
</head>

<body>
Issuing synchronous request.
<br />
Response:
<div id="response">loading...</div>
</body>
<script type="text/javascript">
      var response;
      // silly, but passing the response to a variable outside of the ajax call because
      // thats what the code we're trying to workaround does
      $.ajax({
        type: "GET",
        async: false,
        url: "https://litipsum.com/api",
        success: function(responseData) {
            alert(responseData)
          response = JSON.stringify(responseData);
        },
        // error: e => alert(JSON.stringify(e))
      });
      console.log("Received response", response);
      $('#response').html(response);
    </script>
</html>
`;
