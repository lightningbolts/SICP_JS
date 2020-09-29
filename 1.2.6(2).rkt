#lang racket

(define (even n)
  (= (remainder n 2)) 0)

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
  (try_it (random (exact-floor n))))

(define (fast_is_prime n times)
  (if (= times 0)
      #t
      (if (fermat_test n)
          (fast_is_prime n (- times 1))
          #f
          )))