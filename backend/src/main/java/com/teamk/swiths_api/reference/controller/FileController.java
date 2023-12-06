package com.teamk.swiths_api.reference.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.teamk.swiths_api.reference.service.FileServiceImpl;

import jakarta.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.ArrayList;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class FileController {

    private final AmazonS3Client amazonS3Client;
    private final FileServiceImpl fileServiceImpl;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @PostMapping("/upload") // 버킷에 파일 업로드 하기
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String fileName = file.getOriginalFilename();
            String fileUrl = "https://" + bucket + ".s3.ap-northeast-2.amazonaws.com/" + fileName;
            ObjectMetadata metaData = new ObjectMetadata();
            metaData.setContentType(file.getContentType());
            metaData.setContentLength(file.getSize());

            amazonS3Client.putObject(bucket, fileName, file.getInputStream(), metaData);

            return "업로드 성공" + fileUrl;
        } catch (IOException e) {
            e.printStackTrace();
            return "업로드 실패";
        }
    }

    @GetMapping("/list") // 버킷 내 파일 리스트 가져오기
    public Object getfile() {
        ObjectListing objectListing = amazonS3Client.listObjects(bucket);

        List<String> files = new ArrayList<>();

        for (S3ObjectSummary s : objectListing.getObjectSummaries()) {
            files.add(s.getKey());
        }

        return files;

    }

    @GetMapping("/download") // 버킷 내 파일 다운로드 하기
    public ResponseEntity<byte[]> downloadFile(@RequestParam String fileName) throws IOException {
        return fileServiceImpl.getObject(fileName);
    }

}
