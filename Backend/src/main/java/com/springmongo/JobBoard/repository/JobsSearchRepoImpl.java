package com.springmongo.JobBoard.repository;

import java.util.ArrayList;
import java.util.Arrays;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.springmongo.JobBoard.model.Job;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JobsSearchRepoImpl implements JobsSearchRepo{

    @Autowired
    MongoClient mongoClient ;

    @Autowired
    MongoConverter mongoConverter;

    @Override
    public List<Job> searchByText(String text) {

        List<Job> jobs = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("JobBoard_db");
        MongoCollection<Document> collection = database.getCollection("Jobs");

        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                                                                                new Document("text",
                                                                                new Document("query", text)
                                                                                .append("path", Arrays.asList("_id", "role", "company", "skills"))))));
        result.forEach(doc -> jobs.add(mongoConverter.read(Job.class,doc)));
        return jobs;
    }
}
