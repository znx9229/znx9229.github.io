i = 1
while i <= 5:
    if i == 3:
        i += 1
        continue
        # break
    print(i)
    i += 1
info = ["郑能翔", 29, 1.78]
for info_content in info:
    print(info_content, end=" ")
print("")
print("姓名为%s，年龄为%d，身高为%.2f" % tuple(info))
# 字典练习
name = "姓名"
age = "年龄"
high = "身高"
znx_ifo = {name: "郑能翔",
           age: 18,
           high: 1.78,
           }
print(znx_ifo[name])
