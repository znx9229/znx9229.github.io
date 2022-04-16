import socket
import os
import threading


def thread_task(socket):
    socket_object = SonSocket(socket)
    socket_object.son_socket_work()


def get_request_path(recv_data):
    recv_data_http = recv_data.decode("utf-8")
    request_line_list = recv_data_http.split(" ", 2)
    return request_line_list[1][1:]


def get_post_data(recv_data):
    recv_data_http = recv_data.decode("utf-8")
    request_line_list = recv_data_http.split("\r\n\r\n", 1)
    if len(request_line_list) < 2:
        return ""
    post_content_list = request_line_list[1].split("&")
    post_content = "\n".join(post_content_list)
    return post_content


class Thread(object):
    def __init__(self, socket_handler):
        self.thread = threading.Thread(target=thread_task, args=(socket_handler,))
        self.thread.daemon = True
        self.thread.start()
        print("成功创建一条子线程！")


class SonSocket(object):
    def __init__(self, socket_object):
        self.socket = socket_object
        self.recv_data = None
        self.send_data = None

    def son_socket_work(self):
        self.recv_data = self.socket.recv(4096)
        if len(self.recv_data) == 0:
            self.socket.close()
        else:
            request_path = get_request_path(self.recv_data)
            print("客户端请求的路径为：" + request_path)
            request_data = get_post_data(self.recv_data)
            print("客户端发送内容为:\n" + request_data)
            # 响应策略
            if request_path == "":
                with open("ifo.text", "rb") as response_content_object:
                    response_content = response_content_object.read()
                response_data = ("HTTP /1.1 200 OK\r\n" +
                                 "Server: ZNX-1.1\r\n" +
                                 "\r\n").encode("utf-8") + response_content
            else:
                if os.path.exists(request_path):
                    with open(request_path, "rb") as response_content_object:
                        response_content = response_content_object.read()
                    response_data = ("HTTP /1.1 200 OK\r\n" +
                                     "Server: ZNX-1.1\r\n" +
                                     "\r\n").encode("utf-8") + response_content
                else:
                    with open("ifo.text", "rb") as response_content_object:
                        response_content = response_content_object.read()
                    response_data = ("HTTP /1.1 200 OK\r\n" +
                                     "Server: ZNX-1.1\r\n" +
                                     "\r\n").encode("utf-8") + response_content
            self.socket.send(response_data)
            self.socket.close()


class WebServer(object):
    def __init__(self):
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.son_socket = None
        self.son_client_ip_port = None
        self.thread = None
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True)
        self.socket.bind(("", 8080))
        self.socket.listen(128)
        print("服务器已经启动，等待客户端连接请求！")

    def start(self):
        while True:
            self.son_socket, self.son_client_ip_port = self.socket.accept()
            self.thread = Thread(self.son_socket)


def main():
    web_server = WebServer()
    web_server.start()


if __name__ == '__main__':
    main()
