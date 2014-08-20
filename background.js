chrome.browserAction.onClicked.addListener(
    function(tab) {
        chrome.tabs.getAllInWindow(function(tabary) {
            for(var i=0; i<tabary.length; i++) {
                var tab_i = tabary[i];
                if(tab_i.url.lastIndexOf("http", 0)==0) {
                    chrome.tabs.update(tab_i.id, {url: "chrome://kill" });

                    // chrome.tabs.executeScript(tab_i.id, { code: "window.location.href='chrome://kill'; " } );

                    // chrome.tabs.executeScript
                    // (tab_i.id, { code: "window.stop();var t=document.title;document.body.parentNode.innerHTML=\"\";document.title=t;" } );

                    // chrome.processes.getProcessIdForTab
                    // (tab_i.id,
                    //  function(processId) {
                    //      chrome.processes.terminate(processId, function(didTerminate) { });
                    //  }
                    // );
                    
                }
                
            }
        });

    }
);
