SELECT
    e.id,
    e.name,
    e.department
FROM employees e
LEFT JOIN assignments a
    ON e.id = a.employee_id
WHERE a.employee_id IS NULL;


-- SELECT
--     e.id,
--     e.name,
--     e.department
-- FROM employees e
-- WHERE NOT EXISTS (
--     SELECT 1
--     FROM assignments a
--     WHERE a.employee_id = e.id
-- );

