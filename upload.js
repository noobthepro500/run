   iframeSubmitFile: function() {
//adds a spinning loading icon.  Icon is from font awesome
this.$el.find("#status").html("<i class='icon-spinner icon-spin loading'> </i>");

        var form = $('#file-upload-form');
        form.attr("action", "/user-upload-doc");
        form.attr("method", "post");
        form.attr("enctype", "multipart/form-data");
        form.attr("target", "postiframe");
        //form.attr("target", iframe);
        form.attr("file", this.$el.find('#upload-doc-file').val());


        //example of how to add another value to the post field
        var audit_id = 5;
        //dynamically create an input value for the form post
        var audit_id_input = $("<input>").attr("type", "hidden").attr("name", "audit_id").val(audit_id);

        //add it to the form
        form.append($(audit_id_input));

        //submit form
        form.submit();

        this.refreshUploadAction(); //reset the upload box

        this.$el.find("#postiframe").load(function() {

             //removes the loading icon because the file has finished uploading
            $("#status").html("");

            //having trouble getting the results back from the post
            // console.log($("#postiframe"))
            //  iframeContents = $("#postiframe")[0].contentWindow.document.body.innerHTML;
            //  console.log(iframeContents)
            // $("#textarea").html(iframeContents);
        });

        return false;

    },
