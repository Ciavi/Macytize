//META{"name":"Macytize"}*//

class Macytize {
	initConstructor () {
		this.defaults = {
            settings: {},
			choices: {}
		};
	}

	getName () {return "Macytize";}

	getDescription () {return "Changes Windows' window controls to Mac OSX-inspired custom style!";}

	getVersion () {return "0.0.1";}

	getAuthor () {return "Ciavi";}
	
	getSettingsPanel () {
	}

	load () {
    }

	start () {
        (function() {
            var startingTime = new Date().getTime();
            // Load the script
            var script = document.createElement("SCRIPT");
            script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
        
            // Poll for jQuery to come into existance
            var checkReady = function(callback) {
                if (window.jQuery) {
                    callback(jQuery);
                }
                else {
                    window.setTimeout(function() { checkReady(callback); }, 20);
                }
            };
        
            // Start polling...
            checkReady(function($) {
                $(function() {
                    var endingTime = new Date().getTime();
                    var tookTime = endingTime - startingTime;
                });
            });
        })();

         // you could encode the css path itself to generate id..
        if (!document.getElementById('mcytz'))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = 'mcytz';
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://lichtzeit.altervista.org/REMOTE/BD/Macytize/style/style.circle.css';
            link.media = 'all';
            head.appendChild(link);
        }
        var clbtn = document.getElementsByClassName("winButtonClose-1HsbF-")[0];
        var mnbtn = document.getElementsByClassName("winButtonMinMax-PBQ2gm")[1];
        var mxbtn = document.getElementsByClassName("winButtonMinMax-PBQ2gm")[0];

        clbtn.innerHTML = "";
        mnbtn.innerHTML = "";
        mxbtn.innerHTML = "";

        mnbtn.parentNode.insertBefore(mnbtn, mxbtn);
	}

	initialize () {
		
	}

	stop () {
		if (document.getElementById('mcytz'))
            document.getElementById('mcytz').remove();
        var clbtn = document.getElementsByClassName("winButtonClose-1HsbF-")[0];
        var mnbtn = document.getElementsByClassName("winButtonMinMax-PBQ2gm")[1];
        var mxbtn = document.getElementsByClassName("winButtonMinMax-PBQ2gm")[0];
    
        clbtn.innerHTML = "";
        mnbtn.innerHTML = "";
        mxbtn.innerHTML = "";
    
        mnbtn.parentNode.insertBefore(mnbtn, mxbtn);
        location.reload();
	}
}
