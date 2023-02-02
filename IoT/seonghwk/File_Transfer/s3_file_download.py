import boto3

file_name = 'downloaded_video.mp4'
bucket = 'seonghwk-bucket'
key = 'thankyou_by_seonghwk.mp4'

client = boto3.client(
        's3',
        aws_access_key_id = 'AKIA6QEVMEANLUI7VSOI',
        aws_secret_access_key = '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',
        region_name = 'ap-northeast-2'
)
client.download_file(bucket, key, file_name)