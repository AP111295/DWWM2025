<?php
// @return \PDO

function connexionPDO(): \PDO
{
    try
    {
        $config = require __DIR__."/../config/_blogConfig.php";
        $dsn = "mysql:host={$config['host']};port={$config['port']};
        dbname={$config['dbname']};charset={$config['charset']}";

        $pdo =new \PDO($dsn, $config["user"], $config["password"],
        $config["options"]);
        return $pdo;
    }
    catch(\PDOException $e)
    {
         throw new \PDOException($e->getMessage(), $e->getCode());
    }
}