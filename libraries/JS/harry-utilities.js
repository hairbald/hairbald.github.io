(function () {
    var harryUtilities = {};

    harryUtilities.generateID = function(length) {
        var result = '';
        var characters = 'ABCDEFG0123456789';
        var count = 0;
        while (count < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            count++;
        }
        return result;
    };

    window.harryUtilities = harryUtilities;
})();