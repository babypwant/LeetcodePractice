function updateMatrix(mat) {
    const m = mat.length;
    const n = mat[0].length;

    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    
    // Initialize distances with a large value, and set cells with 0 to 0.
    const distances = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                distances[i][j] = 0;
                queue.push([i, j]);  // add the coordinates to the queue
            }
        }
    }

    while (queue.length) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of dirs) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                if (distances[newX][newY] > distances[x][y] + 1) {
                    distances[newX][newY] = distances[x][y] + 1;
                    queue.push([newX, newY]);
                }
            }
        }
    }

    return distances;
}
