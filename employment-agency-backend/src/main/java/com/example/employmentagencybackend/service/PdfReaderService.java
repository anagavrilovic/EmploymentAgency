package com.example.employmentagencybackend.service;

import org.springframework.web.multipart.MultipartFile;

public interface PdfReaderService {

    String getPdfContent(MultipartFile file);

}
