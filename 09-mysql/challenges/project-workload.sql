<<<<<<< HEAD
SELECT
    p.name AS project_name,
    p.budget,
    COUNT(a.employee_id) AS team_size,
    SUM(a.hours_allocated) AS total_hours
FROM projects p
JOIN assignments a
    ON p.id = a.project_id
WHERE p.budget > 50000
GROUP BY p.id, p.name, p.budget
ORDER BY total_hours DESC;
=======
SELECT
    p.name AS project_name,
    p.budget,
    COUNT(a.employee_id) AS team_size,
    SUM(a.hours_allocated) AS total_hours
FROM projects p
JOIN assignments a
    ON p.id = a.project_id
WHERE p.budget > 50000
GROUP BY p.id, p.name, p.budget
ORDER BY total_hours DESC;
>>>>>>> 403c4d735f86965e6c0af5c77ad49ce3712d52fa
