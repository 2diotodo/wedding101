package com.ssafy.wedding101.model.service.impl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class FileService {

    private final AmazonS3 amazonS3;
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    /**
     * 메소드 : uploadImage
     * 작성자 : 권영진
     * 반환값 : (String) 이미지가 저장된 URL 주소
     * 파라미터 : userId, multipartFile
     * 기능 : AWS S3에 이미지 파일을 지정한 경로에 업로드 후 URL 반환
     */
    public String uploadImage(String userId, MultipartFile multipartFile) {

        // [Step 1] 파일이 저장될 경로를 지정
        StringBuilder fileName = new StringBuilder();
        fileName.append(userId).append("/image/")
                .append(createFileName(multipartFile.getOriginalFilename()));

        System.out.println(fileName);

        // [Step 2] 업로드할 파일의 메타 데이저 등록
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());

        // [Step 3] AWS S3에 파일 업로드
        try (InputStream inputStream = multipartFile.getInputStream()) {
            amazonS3.putObject(new PutObjectRequest(bucket, fileName.toString(), inputStream, objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
        }

        // [Step 4] 업로드된 이미지 파일의 URL
        URL url = amazonS3.getUrl(bucket, fileName.toString());
        System.out.println(url.toString());
        return url.toString();
    }

    /**
     * 메소드 : uploadVideo
     * 작성자 : 권영진
     * 반환값 : (String) 비디오가 저장된 URL 주소
     * 파라미터 : userId, multipartFile
     * 기능 : AWS S3에 비디오 파일을 지정한 경로에 업로드 후 URL 반환
     */
    public String uploadVideo(String userId, MultipartFile multipartFile) {

        // [Step 1] 파일이 저장될 경로를 지정
        StringBuilder fileName = new StringBuilder();

        fileName.append(userId).append("/video/")
                .append(createFileName(multipartFile.getOriginalFilename()));

        // [Step 2] 업로드할 파일의 메타 데이저 등록
        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(multipartFile.getSize());
        objectMetadata.setContentType(multipartFile.getContentType());

        // [Step 3] AWS S3에 파일 업로드
        try (InputStream inputStream = multipartFile.getInputStream()) {
            amazonS3.putObject(new PutObjectRequest(bucket, fileName.toString(), inputStream, objectMetadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
        }

        // [Step 4] 업로드된 이미지 파일의 URL
        URL url = amazonS3.getUrl(bucket, fileName.toString());
        System.out.println(url.toString());
        return url.toString();
    }

    public void deleteFile(String fileUrl) {

        String fileName = fileUrl.substring(60);
        System.out.println(fileName);
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fileName));
    }

    private String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
        }
    }

}
