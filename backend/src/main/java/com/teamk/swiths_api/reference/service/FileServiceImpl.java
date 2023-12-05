package com.teamk.swiths_api.reference.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.net.URLEncoder;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FileServiceImpl {

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public ResponseEntity<byte[]> getObject(String storedFileName) throws IOException, java.io.IOException {
        S3Object o = amazonS3.getObject(new GetObjectRequest(bucket,
                storedFileName));
        S3ObjectInputStream objectInputStream = o.getObjectContent();

        byte[] bytes = com.amazonaws.util.IOUtils.toByteArray(objectInputStream);

        String fileName = URLEncoder.encode(storedFileName,
                "UTF-8").replaceAll("\\+", "%20");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        httpHeaders.setContentLength(bytes.length);
        httpHeaders.setContentDispositionFormData("attachment", fileName);

        return new ResponseEntity<>(bytes, httpHeaders, org.springframework.http.HttpStatus.OK);
    }

}
