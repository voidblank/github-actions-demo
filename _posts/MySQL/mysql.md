#mysql安装时的问题

##my.ini
```java

[client]
port=js

[mysql]
no-beep

default-character-set=utf8

[mysqld]
port=3306

# mysql根目录
basedir="D:\\MySQL\\MySQL Server 5.7"

# 放所有数据库的data目录
datadir=D:\\MySQL\\MySQL Server 5.7\\data

# character-set-server=

# 默认存储引擎innoDB
default-storage-engine=INNODB

# Set the SQL mode to strict
sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

#日志输出为文件
log-output=FILE

# 是否开启sql执行结果记录，必须要设置general_log_file参数，日志的路径地址
# 即日志跟踪，1为开启，0为关闭
general-log=0
general_log_file="execute_sql_result.log"

# 配置慢查询，5.7版本默认为1
slow-query-log=1
slow_query_log_file="user-slow.log"
long_query_time=10

#默认不开启二进制日志
#log-bin=mysql-log

#错误信息文件设置，会将错误信息放在data/mysql.err文件下
log-error=mysql.err

# Server Id.数据库服务器id，这个id用来在主从服务器中标记唯一mysql服务器
server-id=1

#lower_case_table_names： 此参数不可以动态修改，必须重启数据库
#lower_case_table_names = 1  表名存储在磁盘是小写的，但是比较的时候是不区分大小写
#lower_case_table_names=0  表名存储为给定的大小和比较是区分大小写的 
#lower_case_table_names=2, 表名存储为给定的大小写但是比较的时候是小写的
lower_case_table_names=1

#限制数据的导入导出都只能在Uploads文件中操作,这个是在sql语句上的限制。
#secure-file-priv="D:\AppServ\mysql-5.7.23/Uploads"
#值为null ，也就是注释掉这个参数或者secure-file-priv=null。表示限制mysqld 不允许导入|导出
#值为/tmp/ ，即secure-file-priv="/tmp/" 表示限制mysqld 的导入|导出只能发生在/tmp/目录下
#没有具体值时，即secure-file-priv=      表示不对mysqld 的导入|导出做限制

# 最大连接数
max_connections=151
# 打开表的最大缓存数
table_open_cache=2000

# tmp_table_size 控制内存临时表的最大值,超过限值后就往硬盘写，写的位置由变量 tmpdir 决定 
tmp_table_size=16M

# 每建立一个连接，都需要一个线程来与之匹配，此参数用来缓存空闲的线程，以至不被销毁，
# 如果线程缓存中有空闲线程，这时候如果建立新连接，MYSQL就会很快的响应连接请求。
# 最大缓存线程数量
thread_cache_size=10
#无密码启动
skip-grant-tables
```

##安装后无mysql数据库
- 首先`net stop mysql`
- 删除data文件夹
- (管理员)cd到bin目录下，`mysqld --initialize-insecure --user=mysql`

##5.7版本更改密码
- 使用`skip-grant-tables`无密码登录
- 执行以下sql语句
```sql
use mysql;
update user set authentication_string=password('123') where user='root';
flush privileges;
```
