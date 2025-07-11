<?php

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Message>
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    /**
     * @param string $min DATE DE DÉBUT DE L'INTERVALLE EN 'Y-m-d H:i:s'
     * @param string $max DATE DE FIN DE L'INTERVALLE EN 'Y-m-d H:i:s'
     * @return Message[] Returns an array of Message objects
     */
    public function findByDateInterval(string $min, string $max): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere("m.createdAt BETWEEN :min AND :max")
            ->setParameter("min", $min)
            ->setParameter("max", $max)
            // ->setParameter(["min" => $min, "max" => $max])
            ->orderBy("m.createdAt", "DESC")
            ->getQuery()
            ->getResult();
    }

    //    /**
    //     * @return Message[] Returns an array of Message objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Message
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
