from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

app.config['DATABASE'] = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'scot123',
    'host': 'localhost',
    'port': '5432'
}

def get_db():
    conn = psycopg2.connect(**app.config['DATABASE'])
    return conn

@app.route('/')
def index():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()
    
    # Convert tuples to JSON format 
    users = [{"id": row[0], "name": row[1]} for row in rows]  # Adjust fields as needed
    return jsonify(users)  # ✅ Correct: Return


if __name__ == '__main__':
    app.run(debug=True)
