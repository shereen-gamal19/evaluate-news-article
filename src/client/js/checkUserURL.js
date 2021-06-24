
    // from  https://gist.github.com/franciskim/41a959f8e3989254ef5d to check that the url is valid we will use the following regex
 export   function validateUserUrl(value)//we will make a function called validateUserUrl
          {
               var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
                //we will check the entered url
               var regexp = new RegExp(expression);
              // regexp will return true or false if the url is valid or not
               return regexp.test(value);
        }

