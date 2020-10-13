# Write your MySQL query statement below
SELECT w.name AS warehouse_name,
    SUM(w.units * p.Width * p.Length * p.Height) AS volume
FROM Warehouse w
    JOIN Products p ON p.product_id = w.product_id
GROUP BY 1;
--  Write an SQL query to report, How much cubic feet of volume does
--  the inventory occupy in each warehouse.
-- warehouse_name
-- volume
-- Warehouse table:
-- +------------+--------------+-------------+
-- | name       | product_id   | units       |
-- +------------+--------------+-------------+
-- | LCHouse1   | 1            | 1           |
-- | LCHouse1   | 2            | 10          |
-- | LCHouse1   | 3            | 5           |
-- | LCHouse2   | 1            | 2           |
-- | LCHouse2   | 2            | 2           |
-- | LCHouse3   | 4            | 1           |
-- +------------+--------------+-------------+
-- Products table:
-- +------------+--------------+------------+----------+-----------+
-- | product_id | product_name | Width      | Length   | Height    |
-- +------------+--------------+------------+----------+-----------+
-- | 1          | LC-TV        | 5          | 50       | 40        |
-- | 2          | LC-KeyChain  | 5          | 5        | 5         |
-- | 3          | LC-Phone     | 2          | 10       | 10        |
-- | 4          | LC-T-Shirt   | 4          | 10       | 20        |
-- +------------+--------------+------------+----------+-----------+