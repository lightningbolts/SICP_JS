#lang racket

(define (average x y)
  (/ (+ x y) 2))

(define (positive x)
  (> x 0))

(define (negative x)
  (< x 0))

(define (abs x)
  (if (>= x 0)
      x
      (- 0 x)))

(define (close_enough x y)
  (< (abs (- x y)) 0.00000001))


(define (search f neg_point pos_point)
  (define midpoint (average neg_point pos_point))
  (define test_value (f midpoint))
  (if (close_enough neg_point pos_point)
      midpoint
      (if (positive test_value)
          (search f neg_point midpoint)
          (if (negative test_value)
              (search f midpoint pos_point)
              midpoint))))

(define (half_interval_method f a b)
  (define a_value (f a))
  (define b_value (f b))
  (if (and (negative a_value) (positive b_value))
      (search f a b)
      (if (and (negative b_value) (positive a_value))
          (search f b a)
          ('(values are not of opposite sign)))))

(define tolerance 0.00000001)

(define (fixed_point f first_guess)
  (define (try_with guess count)
    (define next (f guess))
    (if (close_enough guess next)
        next
        (try_with next (+ count 1))))
  (try_with first_guess 1))

(define (cont_frac fn fd k)
  (define (helper i)
    (if (> i k)
        0
        (+ (/ (fn i) (fd i)) (helper (+ i 1)))))
  (helper 1))

(define (cont_frac_iter fn fd k)
  (define (iter i frac)
    (if (= i 0)
        frac
        (iter (- i 1) (/ (fn i) (+ (fd i) frac)))))
  (iter k 0))

(define (D i)
  (if (< i 3)
      i
      (if (or (= (remainder i 3) 0) (= (remainder i 3) 1))
          1
          (+ (D (- i 3)) 2))))

(define (cont_frac_iter_sub fn fd k)
  (define (iter i frac)
    (if (= i 0)
        frac
        (iter (- i 1) (/ (fn i) (- (fd i) frac)))))
  (iter k 0))

(define (tan_cf x k)
  (define (fn i)
    (if (= i 1)
        x
        (* x x)))
  (define (fd i)
    (- (* 2 i) 1))
  (cont_frac_sub fn fd k))

(define (cont_frac_sub fn fd k)
  (define (helper i)
    (> i k)
    0
    (- (/ (fn i) (fd i)) (helper (+ i 1))))
  (helper 1))

(define (cube_polynomial x)
  (- (* x x x) (* 2 x) 3))


    
