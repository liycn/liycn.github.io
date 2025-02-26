---
date:
   created: 2024-10-26
   updated: 2025-02-26
readtime: 10
---


## 解压 & 压缩
=== ".tar.gz & .tgz"
    === "解压"
        ```bash
        tar -zxvf FileName.tar.gz
        ```
    === "压缩"
        ```bash
        tar -zcvf FileName.tar.gz dirName
        ```

=== ".zip"
    === "解压"
        ```bash
        unzip FileName.zip -d dirName
        ```
    === "压缩"
        ```bash
        zip FileName.zip DirName
        ```

=== ".tar"
    === "解包"
        ```bash
        tar -xvf xxx.tar
        ```
    === "打包"
        ```bash
        tar -cvf xxx.tar DirName
        ```

=== ".gz"
    === "解压"
        ```bash
        gunzip FileName.gz
        gzip -d FileName.gz
        ```
    === "压缩"
        ```bash
        gzip FileName
        ```
 
=== ".rar"
    === "解压"
        ```bash
        rar -x FileName.rar
        ```
    === "压缩"
        ```bash
        rar -a FileName.rar DirName
        ```
    !!! info "rar 下载链接"
        <a href="https://www.rarlab.com/" target="_blank">点击跳转到 rar 的下载链接</a>
        
        解压后将 **rar_static** 拷贝到 `/usr/bin` 目录（其他由 **$PATH** 环境变量指定的目录也可以）
 
=== ".7z"
    === "解压"
        ```bash
        7z -x file.7z -o/
        ```
    === "压缩"
        ```bash
        7z -a file.7z file
        ```
    !!! info "安装命令"
        ```bash
        sudo apt update & sudo apt install p7zip-full
        ```

=== ".deb"
    === "解包"
        ```bash
        sudo dpkg -i file.deb
        ```
