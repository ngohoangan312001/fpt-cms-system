package com.example.fptacademysystem.services;import com.example.fptacademysystem.model.Courses;import java.util.List;public interface ICourses {    List<Courses> Findall();    void create(Courses courses);    Courses FindOne(int Id);    void update(Courses courses);    void delete(int Id);}