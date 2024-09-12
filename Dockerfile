# Step 1: Use an official Node.js image as a parent image
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /Peadars_workshop

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a lightweight web server image to serve the built React app
FROM nginx:alpine

# Step 8: Copy the build output from the previous stage to the web server
COPY --from=build /Peadars_workshop/build /usr/share/nginx/html

# Step 9: Expose port 80 for the web server
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]