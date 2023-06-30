package com.example.employmentagencybackend.service.impl;

import com.example.employmentagencybackend.service.PdfReaderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@AllArgsConstructor
public class PdfReaderServiceImpl implements PdfReaderService {

    public String getPdfContent(MultipartFile file) {
        //PDDocument
        return "";
    }
}
