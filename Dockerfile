
FROM node:18-alpine 

# Set working directory
WORKDIR /app
    
# Install app dependencies
COPY package*.json ./

RUN npm install
    
# Copy app source code
COPY . .

# Expose port (change if your app listens on a different one)
EXPOSE 8080
    
# Run the app
CMD ["npm", "run", "start:dev"]
    
    
    
    
    