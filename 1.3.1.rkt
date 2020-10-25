#lang racket

(define (sum_integers a b)
  (if (> a b)
      0
      (+ a (sum_integers (+ a 1 b)))))

(define (sum_cubes a b)
  (if (> a b)
      0
      (+ (cube a) (sum_cubes (+ a 1) b))))

(define (pi_sum a b)
  (if (> a b)
      0
      (+ (/ 1 (* a (+ a 2))) (pi_sum (+ a 4) b))))

(define (cube x)
  (* x x x))

(define (name a b term next)
  (if (> a b)
      0
      (+ (term a) (name (next a) b))))

(define (sum_integers1 a b)
  (define (term x)
    x)
  (define (next y)
    (+ y 1))
    (name a b term next))

(define (sum_cubes1 a b)
  (define (next y)
    (+ y 1))
  (name a b cube next))

(define (pi_sum1 a b)
  (define (term x)
    (/ 1 (* x (+ x 2))))
  (define (next y)
    (+ y 4))
    (name a b term next))

(define (factorial n)
  (if (= n 1)
      n
      (* n (factorial (- n 1)))))

(define (factorial2 n)
  (define (iter n product)
    (if (= n 1)
        product
        (iter (- n 1) (* n product))))
  (iter n 1))

(define (factorial3 n)
  (define (times n m)
    (* n m))
  (define (term a)
    a)
  (define (next a)
    (+ a 1))
  (accumulate_iter times 1 1 n term next))

(define (accumulate combiner null_value a b term next)
  (if (> a b)
      null_value
      (combiner (term a) (accumulate combiner null_value next(a) b term next))))

(define (accumulate_iter combiner null_value a b term next)
  (define (iter a result)
    (if (> a b)
        result
        (iter (next a) (combiner (term a) result))))
    (iter a null_value))

(define (filter_accumulate combiner null_value a b term next filter)
  (if (> a b)
      null_value
      (if (filter a)
          (combiner (term a) (filter_accumulate combiner null_value (next a) b term next filter))
          (filter_accumulate combiner null_value (next a) b term next filter))))

(define (sum_of_prime_squares a b)
  (define (plus a b)
    (+ a b))
  (define (square a)
    (* a a))
  (define (next a)
    (+ a 1))
  (define (is_prime n)
    (fast_is_prime n 5))
  (filter_accumulate plus 0 a b square next is_prime))

(define (even n)
  (= (remainder n 2) 0))

(define (square x)
  (* x x))

(define (expmod base expt m)
  (if (= expt 0)
      1
      (if (even expt)
          (remainder (square (expmod base (/ expt 2) m)) m)
          (remainder (* base (expmod base (- expt 1) m)) m))))

(define (fermat_test n)
  (define (try_it a)
    (= (expmod a n n) a))
  (if (= n 2)
      #t
      (try_it (random 2 n))))

(define (fast_is_prime n times)
  (if (= times 0)
      #t
      (if (fermat_test n)
          (fast_is_prime n (- times 1))
          #f
          )))