/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.fptacademysystem.configuration;

/**
 *
 * @author ADMIN
 */
import java.util.Date;
import org.springframework.web.multipart.MultipartFile;
 
public class Mail {
 
    private String mailFrom;
 
    private String mailTo;
 
    private String mailCc;
 
    private String mailBcc;
 
    private String mailSubject;
 
    private String mailContent;
 
    private String contentType;
 
    private MultipartFile attachments;
 
    public Mail() {
        contentType = "text/plain";
    }
 
    public String getContentType() {
        return contentType;
    }
 
    public void setContentType(String contentType) {
        this.contentType = contentType;
    }
 
    public String getMailBcc() {
        return mailBcc;
    }
 
    public void setMailBcc(String mailBcc) {
        this.mailBcc = mailBcc;
    }
 
    public String getMailCc() {
        return mailCc;
    }
 
    public void setMailCc(String mailCc) {
        this.mailCc = mailCc;
    }
 
    public String getMailFrom() {
        return mailFrom;
    }
 
    public void setMailFrom(String mailFrom) {
        this.mailFrom = mailFrom;
    }
 
    public String getMailSubject() {
        return mailSubject;
    }
 
    public void setMailSubject(String mailSubject) {
        this.mailSubject = mailSubject;
    }
 
    public String getMailTo() {
        return mailTo;
    }
 
    public void setMailTo(String mailTo) {
        this.mailTo = mailTo;
    }
 
    public Date getMailSendDate() {
        return new Date();
    }
 
    public String getMailContent() {
        return mailContent;
    }
 
    public void setMailContent(String mailContent) {
        this.mailContent = mailContent;
    }
 
    public MultipartFile getAttachments() {
        return attachments;
    }
 
    public void setAttachments(MultipartFile attachments) {
        this.attachments = attachments;
    }
 
}
