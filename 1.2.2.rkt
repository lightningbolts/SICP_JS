#lang racket

(require racket/trace)
(define (fib n)
  (if (= n 0)
      0
      (if (= n 1)
          1
          (+ (fib (- n 1)) (fib (- n 2))))))
(trace fib)

(define (count_change amount)
  (cc amount 5))

(define (cc amount kinds_of_coins)
            (if (= amount 0)
                1
                (if (or (< amount 0) (= kinds_of_coins 0))
                    0
                    (+ (cc amount (- kinds_of_coins 1)) (cc (- amount (first_denomination kinds_of_coins)) kinds_of_coins)))))

(define (first_denomination kinds_of_coins)
                            (if (= kinds_of_coins 1)
                                1
                                (if (= kinds_of_coins 2)
                                    5
                                    (if (= kinds_of_coins 3)
                                        10
                                        (if (= kinds_of_coins 4)
                                            25
                                            (if (= kinds_of_coins 5)
                                                50
                                                0))))))

(define (f n)
  (if (< n 3)
      n
      (+ (f (- n 1)) (* (f (- n 2)) 2) (* (f (- n 3)) 3))))


(define (f2 n)
  (f2_iter 0 1 2 n))

(define (f2_iter p3 p2 p1 count)
  (if (= count 0)
      p3
      (f2_iter p2 p1 (+ p1 (* 2 p2) (* 3 p3)) (- count 1))))

(define (pascal r c)
  (if (>= r c)
      (if (or (= r c) (= c 0))
          1
          (+ (pascal (- r 1) (- c 1)) (pascal (- r 1) c)))
      (print "Error. Arguments are invalid. The second argument is greater than the first. Have a good day!")))
