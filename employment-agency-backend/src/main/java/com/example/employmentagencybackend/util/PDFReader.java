package com.example.employmentagencybackend.util;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

public class PDFReader {

    public static String getPdfContent(MultipartFile multipartFile) throws IOException {
        try (InputStream inputStream = multipartFile.getInputStream();
            PDDocument document = PDDocument.load(inputStream)) {
            PDFTextStripper textStripper = new PDFTextStripper();
            return textStripper.getText(document);
        }
    }
}
