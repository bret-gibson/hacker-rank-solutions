# Write your MySQL query statement below
SELECT users.name AS NAME,
    SUM(transactions.amount) AS BALANCE
FROM users
    INNER JOIN transactions ON users.account = transactions.account
GROUP BY users.account
HAVING BALANCE > 10000;
-- Write an SQL query to report the name and balance of users with a
-- balance higher than 10000. The balance of an account is equal to 
-- the sum of the amounts of all transactions involving that account.
-- Users table:
-- +------------+--------------+
-- | account    | name         |
-- +------------+--------------+
-- | 900001     | Alice        |
-- | 900002     | Bob          |
-- | 900003     | Charlie      |
-- +------------+--------------+
-- Transactions table:
-- +------------+------------+------------+---------------+
-- | trans_id   | account    | amount     | transacted_on |
-- +------------+------------+------------+---------------+
-- | 1          | 900001     | 7000       |  2020-08-01   |
-- | 2          | 900001     | 7000       |  2020-09-01   |
-- | 3          | 900001     | -3000      |  2020-09-02   |
-- | 4          | 900002     | 1000       |  2020-09-12   |
-- | 5          | 900003     | 6000       |  2020-08-07   |
-- | 6          | 900003     | 6000       |  2020-09-07   |
-- | 7          | 900003     | -4000      |  2020-09-11   |
-- +------------+------------+------------+---------------+