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
      (negate x)))

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


(define (deriv gx)
  (define dx 0.00000001)
  (define (dg x)
    (/ (- (gx (+ x dx)) (gx x)) dx))
  dg)

(define (newton_transform g)
  (lambda x
    (/ (- x (g x)) (deriv g) x)))

(define (newton_method g guess)
  (fixed_point (newton_transform g) guess))

(define (cube x)
  (* x x x))

(define (cubic a b c)
  (lambda x
    (+ (cube x) (+ (* a (* x x)) (+ (* b x) c)))))

(define (double func)
  (lambda x
    (func (func x))))

(define (compose f g)
  (lambda x
    (f (g x))))

(define (counter n)
  (+ n 1))

(define count 1)

(define (repeated f n)
  (define count (counter count))
  '(count)
  (if (= n 1)
      f
      (if (= (remainder n 2) 0)
          (compose (repeated f (* (/ 1 2) n)) (repeated f (* (/ 1 2) n)))
          (compose f (repeated f (- n 1))))))

(define (average3 x y z)
  (/ (+ x (+ y z)) 3))

(define (smooth f dx)
  (lambda x
    (average3 (f (- x dx)) (f x) (f (+ x dx)))))

(define (n_root n times value)
  (define (average_damp x)
    (* (/ 1 2) (+ (/ value (exp x (- n 1))) x)))
  (fixed_point (repeated average_damp times) 1))

(define (iterative_improve good_enough improve_guess)
  (lambda guess
    (if (good_enough guess)
        guess
        (iterative_improve good_enough improve_guess (improve_guess guess)))))

(define (sqrt_new n)
  (define (good_enough x)
    (define tolerance 0.000001)
    (<= (abs (- n (exp x 2))) tolerance))
  (define (improve_guess x)
    (average2 x (/ n x)))
  (iterative_improve good_enough improve_guess 1))

(define (average2 x y)
  (/ (+ x y) 2))

(define (function y)
  (lambda y
    (- (cube y) 4))) 

