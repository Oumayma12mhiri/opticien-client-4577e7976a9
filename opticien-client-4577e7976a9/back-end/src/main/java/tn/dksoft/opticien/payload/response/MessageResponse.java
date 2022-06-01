package tn.dksoft.opticien.payload.response;

import java.io.Serializable;

public class MessageResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
