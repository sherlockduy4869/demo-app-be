# Step 1: Define the base image
FROM node:18-alpine AS builder

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the NestJS application
RUN npm run build

# Step 7: Define the production image
FROM node:18-alpine

# Step 8: Set the working directory for the production image
WORKDIR /usr/src/app

# Step 9: Copy the built files from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

# Step 10: Install production dependencies only
RUN npm install --production

# Step 11: Expose the port that the app will run on
EXPOSE 3001

# Step 12: Define the command to run the application
CMD ["node", "dist/main"]
    
    